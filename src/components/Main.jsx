// importazioni
import PostCard from "./Card/PostCard";
import posts from '../data/posts';

export default function Main() {

    // markup
    return (
        <main>
            <div className="container">
                {posts.map (post => <PostCard key={post.id} post={post}/>)}
            </div>
        </main>
    )
}