import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';

// This is a fake function that simulates fetching data from an API
const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next:{revalidate:3600}});
    if(!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

const BlogPage = async () => {

    const posts = await getData();

    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post}/>
                </div>
            ))}
        </div>
    );
};

export default BlogPage;