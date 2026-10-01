import "./header.scss";

const Header = (props) => {
  props.sayName("ali", event);

  return (
    <header>
      <h2>hello</h2>
      <p>name = {props.user.name}</p>
      <p>age = {props.user.age}</p>
      <p>{props.children}</p>
    </header>
  );
};

export default Header;
