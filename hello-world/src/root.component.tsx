export default function Root(props) {
  console.log('%c from hello-world', 'color: yellow;')
  return <section>{props.name} is mounted!</section>;
}
