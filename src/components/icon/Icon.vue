<template lang="pug">
svg.sui-icon(
  v-html='svgContent'
  v-bind='{ width: 0, height: 0, ...svgAttrs }'
  :style='iconStyle'
)
</template>

<script lang="ts">
  import { defineComponent, computed, ref, watch } from 'vue';
  import { parseDocument, ParserOptions, DomUtils } from 'htmlparser2';
  import { Element } from 'domhandler';
  import deepmerge from 'deepmerge';

  const PARSER_OPTIONS: ParserOptions = {
    xmlMode: true,
    lowerCaseTags: false,
    decodeEntities: false,
    lowerCaseAttributeNames: false,
  } as const;

  const ICONS_SPRITE = deepmerge({ sprites: [require('../../common/icons-sprite.svg')] }, {});
  const cacheMap = new Map<string, Promise<string>>();
  const parsedDocuments = new Map<string, Element[]>();
  const symbolsMap = new Map<string, string>();

  export default defineComponent({
    name: 'Icon',
    props: {
      spriteUrl: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      url: {
        type: String,
        default: null,
        validator: (url: string) => /(^https?:\/\/)|(^\/)/.test(url),
      },
      color: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const getColorValue = (color: string) => (color.startsWith('--') ? `var(${color})` : color);

      const iconStyle = computed(() => ({
        ...(props.color && { '--icon-color': getColorValue(props.color) }),
      }));

      const { svgContent, svgAttrs, updateSvgContent, loadSprites } = useSvgController();

      const sprites = ICONS_SPRITE.sprites;

      const svgUrl = computed(() => props.url || props.spriteUrl);

      const allSpriteSymbolsStored = computed(() => sprites.every((sprite) => Array.from(symbolsMap.values()).includes(sprite)));

      watch(
        [svgUrl, () => props.name],
        async () => {
          if (!allSpriteSymbolsStored.value) {
            await loadSprites(sprites);
          }

          const url = svgUrl.value || symbolsMap.get(props.name) || '';
          await updateSvgContent(url, props.name);
        },
        { immediate: true }
      );

      return { iconStyle, svgContent, svgAttrs };
    },
  });

  function useSvgController() {
    const svgContent = ref<string>('');
    const svgAttrs = ref<Record<string, string>>({});

    const retrieveResponseFromCacheStorage: (svgUrl: string) => Promise<string> = async (svgUrl) => {
      const cache = await caches.open('sui-svg');
      let cacheRequest = await cache.match(svgUrl);

      if (!cacheRequest) {
        await cache.add(svgUrl);
        cacheRequest = await cache.match(svgUrl);
      }

      return cacheRequest ? await cacheRequest.text() : Promise.reject(new Error('SVG not found in the cache storage'));
    };

    const fetchSvg: (svgUrl: string) => Promise<string> = async (svgUrl) => {
      if (!cacheMap.has(svgUrl)) {
        try {
          cacheMap.set(svgUrl, 'caches' in window ? retrieveResponseFromCacheStorage(svgUrl) : fetch(svgUrl).then((r) => r.text()));
        } catch (e) {
          cacheMap.delete(svgUrl);
        }
      }

      // eslint-disable-next-line
      return cacheMap.has(svgUrl) ? await cacheMap.get(svgUrl)! : Promise.reject(new Error('Error in fetching the SVG'));
    };

    const getDocumentChildrenFrom = (document: string) => {
      const documentChildren = parsedDocuments.get(document) || (parseDocument(document, PARSER_OPTIONS)?.children as Element[]);

      if (documentChildren && !parsedDocuments.has(document)) {
        parsedDocuments.set(document, documentChildren);
      }

      return documentChildren;
    };

    const findSvgTree = (documentChildren: Element[]) =>
      DomUtils.findOneChild((child) => DomUtils.isTag(child) && DomUtils.getName(child) === 'svg', documentChildren);

    const getSymbolIdsFrom: (svgTree: Element) => string[] = (svgTree) => {
      const symbols: Element[] =
        (DomUtils.filter((child) => DomUtils.isTag(child) && DomUtils.getName(child) === 'symbol', svgTree) as Element[]) || [];
      const symbolIds: string[] = symbols.map((symbol) => symbol.attribs.id);

      return symbolIds;
    };

    const extractSvgContentAndAttrs = (svg = '', symbolId = '') => {
      let content = '';
      let attrs: Record<string, string> = {};

      const documentChildren = getDocumentChildrenFrom(svg);

      const svgTree = findSvgTree(documentChildren);

      if (svgTree && DomUtils.isTag(svgTree)) {
        const symbol = DomUtils.findOneChild(
          (child) => DomUtils.getName(child as Element) === 'symbol' && DomUtils.getAttributeValue(child as Element, 'id') === symbolId,
          svgTree.children
        );

        if (symbol && DomUtils.isTag(symbol)) {
          content = DomUtils.getInnerHTML(symbol);
          attrs = symbol.attribs;
        } else {
          content = DomUtils.getInnerHTML(svgTree);
          attrs = svgTree.attribs;
        }

        if (attrs.viewBox) {
          const [, , width, height] = attrs.viewBox.split(' ');
          attrs = { width, height, ...attrs };
        }
      } else {
        console.error('Icon component cannot fetch SVG by provided URL');
      }

      return { content, attrs };
    };

    const updateSvgContent = async (newUrl: string, symbolId = '') => {
      if (!newUrl) return;
      const svg = await fetchSvg(newUrl);

      const { content, attrs } = extractSvgContentAndAttrs(svg, symbolId);
      svgContent.value = content;
      svgAttrs.value = attrs;
    };

    const loadSprites = async (sprites: string[]) => {
      for (const sprite of sprites) {
        const svg = await fetchSvg(sprite);
        const documentChildren = getDocumentChildrenFrom(svg);
        const svgTree = findSvgTree(documentChildren);
        if (svgTree && DomUtils.isTag(svgTree)) {
          const symbolIds = getSymbolIdsFrom(svgTree);
          symbolIds.forEach((symbolId) => symbolsMap.set(symbolId, sprite));
        }
      }
    };

    return {
      svgContent,
      svgAttrs,
      updateSvgContent,
      loadSprites,
    };
  }
</script>

<style>
  .sui-icon path {
    transition: fill var(--transition);
    fill: var(--icon-color);
  }
</style>
