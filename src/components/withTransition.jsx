import { useTransition, animated } from "react-spring";

const WithTransition = (WrappedComponent, items, animation) => {
  const transition = useTransition(items, animation);

  const AnimatedComponent = animated(WrappedComponent);
  const MyComponent = (props) => {
    return (
      <>
        {transition((style, item) =>
          item ? <AnimatedComponent style={style} {...props} /> : <></>
        )}
      </>
    );
  };
  return MyComponent;
};

export default WithTransition;
