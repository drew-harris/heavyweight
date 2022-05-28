const TwitchView = () => {
  const channel = "hasanabi";
  return (
    <div className="twitch-view">
      <iframe
        style={{
          border: "1px solid red",
        }}
        title="twitch-view"
        width="100%"
        src={`https://player.twitch.tv/?channel=${channel}&parent=weight.drewh.net`}
        frameBorder="0"
        scrolling="no"
        allowFullScreen={false}
      />
      TESTING123
    </div>
  );
};

export default TwitchView;
