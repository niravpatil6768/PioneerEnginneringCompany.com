import * as React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Grid, Typography } from "@mui/material";
import "../style.css";

const useParallaxBanner = (setScrollPosition) => {
  const handleScroll = () => setScrollPosition(window.pageYOffset);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default function LandPage() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  useParallaxBanner(setScrollPosition);

  const [text, setText] = React.useState(""); // State to hold the text
  const message = "nirav here"; // Text to be animated
  const [index, setIndex] = React.useState(0); // State to keep track of the index of the current character

  React.useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < message.length) {
        setText((prevText) => prevText + message[index]); // Append the next character to the text
        setIndex((prevIndex) => prevIndex + 1); // Increment the index
      } else {
        clearInterval(typingInterval); // Stop the animation when all characters are typed
      }
    }, 200); // Adjust the interval to control the typing speed

    return () => clearInterval(typingInterval); // Cleanup function to clear interval
  }, [index, message.length]); // Run effect whenever index or message length changes

  return (
    // <Grid
    //   className="background-container"
    //   container
    //   sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "none" } }}
    // >
    //   <div className="background-image"></div>
    //   <div
    //     style={{
    //       left:
    //         window.innerWidth <= 300
    //           ? 150
    //           : window.innerWidth >= 900
    //           ? "37%"
    //           : window.innerWidth >= 600 && window.innerWidth < 890
    //           ? "52%"
    //           : 220,
    //       // backgroundColor: "red",
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "end",
    //     }}
    //     className="text-on-image"
    //   >
    //     <Typography
    //       style={{
    //         fontSize:
    //           window.innerWidth > 700 && Window.innerWidth <= 900
    //             ? 45
    //             : window.innerWidth <= 300
    //             ? 25
    //             : window.innerWidth >= 700
    //             ? 50
    //             : 30,
    //         // whiteSpace: "nowrap",
    //       }}
    //     >
    //       hello nirav here
    //     </Typography>
    //   </div>
    // </Grid>

    <Grid>
      <section
        style={{
          backgroundSize: `${(Window.outerHeight - scrollPosition) / 3}%`,
        }}
        className="banner"
      >
        <div
          style={{
            //   left:
            //       window.innerWidth <= 300
            //         ? 150
            //         : window.innerWidth >= 900
            //         ? "37%"
            //         : window.innerWidth >= 600 && window.innerWidth < 890
            //         ? "52%"
            //         : 220,
            // backgroundColor: "red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="text-on-image"
        >
          <Typography
            style={{
              fontSize:
                window.innerWidth > 700 && Window.innerWidth <= 900
                  ? 45
                  : window.innerWidth <= 300
                  ? 25
                  : window.innerWidth >= 700
                  ? 50
                  : 30,
              // whiteSpace: "nowrap",
            }}
          >
            {text}
          </Typography>
        </div>
      </section>
    </Grid>
  );
}
