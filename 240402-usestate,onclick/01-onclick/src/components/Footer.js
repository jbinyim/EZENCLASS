const Footer = ({ children }) => {
  console.log(children);
  return (
    <div>
      <h1>footer</h1>
      <h2>{children}</h2>
    </div>
  );
};
export default Footer;
