<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css';

const vditor = ref<Vditor | null>(null);
// (vditor.value as any).activeElement.blur();
onMounted(() => {
    vditor.value = new Vditor('vditor', {
        typewriterMode: true,
        placeholder: '你可以开始写文章啦！',
        mode: 'wysiwyg',
        toolbar: ['headings', 'strike', 'link', '|', 'insert-after', 'insert-before', '|', 'check', 'list', 'ordered-list', '|', 'emoji', 'line', 'table', '|', 'undo', 'redo', '|', 'quote', 'code', 'upload', '|', 'preview', 'fullscreen'],
        counter: { enable: true },
        upload: {
            url: 'www.baidu.com',
            accept: 'image/*',
            multiple: false,
            linkToImgFormat(responseText: string): string {
                console.log(responseText);
                return 'www.baidu.com'
            },
            success(editor: HTMLPreElement, msg: string) {
                console.log(editor)
            }
        }
        // after: () => {
        //     vditor.value!.setValue('Vue Composition API + Vditor + TypeScript Minimal Example');
        // },
    });
});

onUnmounted(() => {

})
</script>

<template>
    <div id="vditor" />
</template>