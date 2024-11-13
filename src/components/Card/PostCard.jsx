// importazioni
import style from '../Button/Button.module.css';
import posts from '../../data/posts';

export default function PostCard() {
    
    // logica
    const button = 'leggi di più';

    // markup
    return (
        <div className="card">
            <div className="card-top">
                <img src="https://picsum.photos/600/400" alt="immagine casuale" />
            </div>
            <div className="card-bottom">
                <h4>
                    Titolo del post
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque quibusdam a tempora eius labore earum minus. Dolorem quasi ipsa, suscipit qui laboriosam repellendus repellat sit delectus quaerat nihil repudiandae?
                </p>
                <button className={style.btn}>
                    {button.toUpperCase()}
                </button>
            </div>
        </div>
    )
}