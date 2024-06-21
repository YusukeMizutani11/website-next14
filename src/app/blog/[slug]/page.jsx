import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = ({params}) => {

    console.log(params);
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/14105926/pexels-photo-14105926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
                fill 
                className={styles.img} 
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image src="https://images.pexels.com/photos/14105926/pexels-photo-14105926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="" 
                    width={50}
                    height={50}
                    className={styles.avator}
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Yusuke Mizutani</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et libero nec mi ultrices 
                        posuere. Nullam sit amet mauris non eros consectetur tincidunt. Nulla facilisi. 
                        Nullam nec nunc quis mi ultrices tincidunt. Integer at odio nec nunc tincidunt 
                        ultrices. Donec nec libero ut ipsum fermentum tincidunt. Nulla facilisi. 
                        Nullam nec nunc quis mi ultrices tincidunt. Integer at odio nec nunc tincidunt 
                        ultrices. Donec nec libero ut ipsum fermentum tincidunt.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage;