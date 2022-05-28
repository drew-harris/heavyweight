import { useState } from "react";
import Button from "../Button/Button";

const TwitchView = () => {
  const channel = "hasanabi";
  const [hidden, setHidden] = useState(false);
  const width = window.innerWidth;
  return (
    <div className="twitch-view">
      {!hidden && (
        <iframe
          title="twitch-view"
          width={window.innerWidth}
          src={`https://player.twitch.tv/?channel=${channel}&parent=weight.drewh.net`}
          frameBorder="0"
          height={(width * 9) / 16}
          scrolling="no"
          allowFullScreen={false}
        />
      )}
      <Button
        text={hidden ? "Show" : "Hide"}
        onClick={() => setHidden(!hidden)}
      />
    </div>
  );
};

export default TwitchView;
