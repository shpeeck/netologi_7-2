import Video from "../Video";
import Article from "../Article";
import shortid from "shortid";
import Popular from "../Popular";
import New from "../New";

export default function List(props) {
  const Raw = (Component) => {
    function Wrapper(props) {
      if (props.views <= 100) {
        return (
          <New>
            <Component {...props} />
          </New>
        );
      } else if (props.views > 1000) {
        return (
          <Popular>
            <Component {...props} />
          </Popular>
        );
      } else {
        return <Component {...props} />;
      }
    }
    return Wrapper;
  };
  const NewVideo = Raw(Video);
  const NewArticle = Raw(Article);

  return props.list.map((item) => {
    switch (item.type) {
      case "video":
        // return <Video {...item} key={shortid.generate()} />;
        return <NewVideo {...item} key={shortid.generate()} />;

      case "article":
        // return <Article {...item} key={shortid.generate()} />;
        return <NewArticle {...item} key={shortid.generate()} />;
    }
  });
}
