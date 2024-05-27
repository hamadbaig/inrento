// Testimonial.js

const Testimonial = ({ rating, title, content, author }) => {
  return (
    <div className="testimonial-card">
      <div className="rating">{rating}</div>
      <h3 className="title3">{title}</h3>
      <p className="content">{content}</p>
      <p className="author">{author}</p>
    </div>
  );
};

export default Testimonial;
