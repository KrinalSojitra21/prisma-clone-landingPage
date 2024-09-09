import { theme } from "@/theme";
import { Box, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/home/components/navbar";
import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "./AuthContext";
import CustomButton from "@/components/shared/CustomButton";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
});

const Wrapper = ({ children }: any) => {
  // const scrollRef = useRef<HTMLDivElement>(null);
  const [isNavbarExtended, setIsNavbarExtended] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollRef } = useAuthContext();

  useEffect(() => {
    if (!scrollRef) return;
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollTop;
        if (scrollPosition > 49) {
          setIsScrolled(true);
        } else if (scrollPosition == 0) {
          setIsScrolled(false);
        }
      }
    };

    const attachScrollListener = () => {
      const scrollElement = scrollRef.current;
      if (scrollElement) {
        scrollElement.addEventListener("scroll", handleScroll);
      }
    };

    // Attach the listener immediately if the ref is available
    attachScrollListener();

    // Also set up a small delay to try attaching again, in case the ref wasn't ready
    const timeoutId = setTimeout(attachScrollListener, 100);

    return () => {
      clearTimeout(timeoutId);
      const scrollElement = scrollRef.current;
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <div
              className={`${poppins?.className} flex bg-black-A100 flex-col sm:px-6  lg:px-8 items-center w-full overflow-y-auto hide-scrollbar relative overflow-x-hidden`}
              style={{
                height: "100dvh",
                overflowY: "auto",
              }}
              ref={scrollRef}
            >
              <div
                className={`w-full z-20 navbar flex items-center flex-col  ${
                  (isScrolled || isNavbarExtended) && "bg-black-A100"
                } ${isScrolled ? "py-3" : "py-9"}`}
                style={{ position: "sticky", top: "0", padding: "36px 0" }}
              >
                <Navbar
                  isNavbarExtended={isNavbarExtended}
                  setIsNavbarExtended={setIsNavbarExtended}
                />
              </div>
              {children}
            </div>
          </ThemeProvider>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  );
};

export default Wrapper;
