import { PostCard } from "../PostCard";
import './styles.css'


export const Posts = ({ posts }) => (

  <div className="posts">
    {posts.map((post) => (
      <PostCard
        // pode ser qualquer nome como chave ex. wxxxxxxxx
        //  wid={post.id}  wtitle={post.title}  wbody={post.body}  wcover={post.cover}
        //  wpost={post}
        //
        // o comando abaixo key=   é obrigatorio quando utiliza o MAP para evitar erros de warning na console
        //
        key={post.id}
        post={post}
      />
    ))}
  </div>
);
