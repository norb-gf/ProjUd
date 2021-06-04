import { Component } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      // posts: postsAndPhotos.slice(this.state.page,this.state.postsPerPage),
      // ou conf. abaixo porem é necessário declarar as constantes como acima
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    // const value = e.target.value;
    const { value } = e.target;
    this.setState({ searchValue: value });
    console.log(value, this.state.searchValue);
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    // curto circuito (!! transforma em boolean) com operacao ternaria:
    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && <h1> Search Value: {searchValue}</h1>}
          <TextInput
            actionFn={this.handleChange}
            inputValue={searchValue}
          />
        </div>

        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && (
          <p>Não existem Posts para o argumento de pesquisa</p>
        )}
        <div className="button-container">
          {/* o <text> abaixo irá passar o conteudo como props */}
          {!searchValue && (
            <Button
              text="Load more Posts"
              wOnClick={this.loadMorePosts}
              wDisabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}
