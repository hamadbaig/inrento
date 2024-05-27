import news1 from "../Assets/news1.jpg";
import news2 from "../Assets/news2.jpg";
import news3 from "../Assets/news3.png";
const LatestNews = () => {
  const newsItems = [
    {
      date: "02.05.2024",
      title: "Before discussing lower interest rates: assessing the USA...",
      imageUrl: news1,
    },
    {
      date: "30.04.2024",
      title: "Compounded interest can increase the value of investments by ...",
      imageUrl: news2,
    },
    {
      date: "24.04.2024",
      title: "2023 audited financial accounts. Company's net profit ...",
      imageUrl: news3,
    },
  ];
  return (
    <div className="latest-news">
      <h2 className="title2">Latest news</h2>
      <div className="news-container">
        {newsItems.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.imageUrl} alt="news" className="news-image" />
            <div className="news-info">
              <p className="news-date">{item.date}</p>
              <h3 className="news-title">{item.title}</h3>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
