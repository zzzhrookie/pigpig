<template>
    <div>
        <!-- defaultOpen: edit 默认展示编辑区域  preview 默认展示预览区域  其他 = edit -->
        <!-- subfield  true 双栏（编辑预览同屏）  false 单栏（编辑预览分屏） -->
        <!-- toolbarsFlag 工具栏是否显示 -->
        <mavon-editor v-model="articleContent" defaultOpen="preview" :subfield="false" :toolbarsFlag="false" />
        <main>

        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articleContent: ''
        }
    },
    created() {
        console.log(this.$route.params)
        this.fetchContent()
    },
    methods: {
        fetchContent() {
            this.$axios.get('/api/articleDetail/' + this.$route.params.id).then(res => {
                console.log(res)
                this.articleContent = res.data.result.content
            })
        }
    }
}
</script>

