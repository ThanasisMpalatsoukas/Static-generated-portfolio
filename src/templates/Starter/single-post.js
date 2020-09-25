import React from "react"
import '../../css/index.css';
import Post from '../../components/Templates/Starter/Post';
import Layout from "../../components/Templates/Starter/layout";
import SEO from  "../../components/Templates/Starter/seo";


export default class SinglePost extends React.Component {
    render() {
        const post = this.props.pageContext.post.node;
        return (
            <Layout>
                <SEO 
                    title={post.frontmatter.title}
                    description={post.excerpt}
                />
                <Post post={post} />
            </Layout>
        )
    }
}


