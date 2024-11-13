// importazioni
import PostCard from "./Card/PostCard";
import posts from '../data/posts';

export default function Main() {

    // logica
    const updated_posts = posts.filter(post => post.published === true);

    // markup
    return (
        <main>
            <div className="container">
                <div className="row">
                    {updated_posts.map(post => <PostCard key={post.id} post={post} />)}
                </div>
            </div>
        </main>
    )
}