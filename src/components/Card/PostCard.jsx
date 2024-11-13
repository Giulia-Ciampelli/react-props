// importazioni
import style from '../Button/Button.module.css';

export default function PostCard({post}) {
    
    // logica
    const button = 'leggi di più';

    // markup
    return (
        <div className="card">
            <div className="card-top">
                <img src="https://picsum.photos/600/400" alt={post.title} />
            </div>
            <div className="card-bottom">
                <h4>
                    {post.title}
                </h4>
                <p>
                    {post.content}
                </p>
                <button className={style.btn}>
                    {button.toUpperCase()}
                </button>
            </div>
        </div>
    )
}