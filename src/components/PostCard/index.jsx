import './styles.css'

export const PostCard = (props) => {

    // console.log(props);
    // o props acompanha o nome dado no component de origem ex. wprops....etc...
    // const cover = props.wcover;
    // const id = props.wid;
    // const body = props.wbody;
    // const title = props.wtitle;

    const post = props.post;

// ===========================================
//   1a. opcao
// ===========================================
// ou com o formato abaixo:
// export const PostCard = (props) => {

//     console.log(props);
//     // const cover = props.cover;
//     // const id = props.id;
//     // const body = props.body;
//     // const title = props.title;

//     const post = props.post;
// ou já que tem o mesmo nome na origem e aqui:
//     const { post } = props; 
// -------------------------------------------

// ===========================================
//   2a. opcao
// ===========================================
// tambem dá para fazer mais direto:
// export const PostCard = ({cover, id, body, title}) => {
//      OBS: para esse caso, retirar o prefixo post. dos campos dentro do jsx abaixo
//
//    ou
// export const PostCard = ({ post }) => {
// -------------------------------------------
//
//  OBBS:  quando não tem nada entre o inicio e o return,
//         o mesmo pode ser retirado com as { } apos a arrow function
//
//  export const PostCard = ({ post }) =>
//       (
//          <div>.....etc......
//        )
//
//
  return (
    // <h1>Ok</h1>
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div key={post.id} className="post-content">
        <h1>{post.title} {post.id}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};