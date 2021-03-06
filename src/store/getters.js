const getters = {
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    size: state => state.app.size,
    device: state => state.app.device,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    introduction: state => state.user.introduction,
    status: state => state.user.status,
    roles: state => state.user.roles,
    setting: state => state.user.setting,
    permission_routers: state => state.permission.routers,
    menu: state => state.permission.menu,
    addRouters: state => state.permission.addRouters,
    errorLogs: state => state.errorLog.logs,
    article_list: state => state.article.article_list,
    catalogue_list: state => state.article.catalogue_list,
    tags_list: state => state.article.tags_list,
    total: state => state.article.total,
    title: state => state.article.title,
    sub_title: state => state.article.sub_title,
    body: state => state.article.body,
    catalogue: state => state.article.catalogue,
    image_uri: state => state.article.image_uri,
    comments_disabled: state => state.article.comments_disabled,
    groups_list: state => state.user.groups_list,
    percent_list: state => state.dashboard.percent_list,
    blog_count: state => state.dashboard.blog_count,
    blog_browse_count: state => state.dashboard.blog_browse_count,
    blog_collect_count: state => state.dashboard.blog_collect_count,
    blog_messages_count: state => state.dashboard.blog_messages_count,
    messags_list: state => state.user.messages_list,
    messags_total: state => state.user.messags_total,
    unread_messages_list: state => state.user.unread_messages_list,
    unread_messages_total: state => state.user.unread_messages_total,
}
export default getters