import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { createTweetThunk } from './store/tweet.js';
import styles from './CreateTweet.module.css';

export default function CreateTweet() {
    const [tweet, setTweet] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await dispatch(createTweetThunk({ message: tweet }));
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                className={styles.form}
            >
                <input className={styles.input}
                    type="text"
                    placeholder="Write a tweet..."
                    value={tweet}
                    onChange={(e) => setTweet(e.target.value)}
                    required
                />
                <button className={styles.button}
                    type="submit"
                >Tweet
                </button>
            </form>
        </>
    )
}
