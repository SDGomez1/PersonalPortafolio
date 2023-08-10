import { changeLanguage } from "@/redux/features/currentLanguage/currentLanguageSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import styles from "@/styles/components/Navbar/Menu.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export const Menu = () => {
  const state = useAppSelector((state) => state.switch.value);
  const currentLanguage = useAppSelector((state) => state.language.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <motion.nav
        className={styles.menu}
        animate={state ? { background: "#EED5FF" } : { background: "#E9EEEF" }}
      >
        <ul>
          <Link href="/AboutMe">
            <motion.li
              style={state ? { color: "#6127C9" } : { color: "#366D6E" }}
              whileHover={{ marginLeft: "10px" }}
              transition={{ duration: 0.3 }}
            >
              <svg
                id="Capa_1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                height="20"
                width="20"
                fill={state ? "#6127C9" : "#366D6E"}
              >
                <circle cx="25" cy="14.17" r="13.4" />
                <path d="m49.21,51.19H.79c.85-13.19,11.36-23.61,24.21-23.61s23.36,10.42,24.21,23.61Z" />
              </svg>
              {!currentLanguage ? "About Me" : "Sobre mí"}
            </motion.li>
          </Link>
          <Link href="/Electronics">
            <motion.li
              style={state ? { color: "#6127C9" } : { color: "#366D6E" }}
              whileHover={{ marginLeft: "10px" }}
            >
              <svg
                id="Capa_1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                stroke={state ? "#6127C9" : "#366D6E"}
                height="20"
                width="20"
                fill={state ? "#6127C9" : "#366D6E"}
              >
                <circle cx="38.61" cy="9.9" r="3.45" />
                <circle cx="25" cy="4.61" r="3.45" />
                <circle cx="43.77" cy="28.45" r="3.45" />
                <circle cx="6.91" cy="28.45" r="3.45" />
                <circle cx="11.52" cy="9.9" r="3.45" />
                <line x1="25" y1="8.06" x2="25" y2="50" />
                <line x1="6.91" y1="38.85" x2="6.91" y2="31.9" />
                <line x1="11.74" y1="43.68" x2="6.99" y2="38.93" />
                <line x1="11.74" y1="50" x2="11.74" y2="43.68" />
                <line x1="11.52" y1="19.78" x2="11.52" y2="13.85" />
                <line x1="17.9" y1="26.16" x2="11.52" y2="19.78" />
                <line x1="17.9" y1="50" x2="17.9" y2="26.16" />
                <line x1="32.03" y1="50" x2="32.03" y2="27.1" />
                <line x1="38.61" y1="20.52" x2="32.03" y2="27.1" />
                <line x1="38.61" y1="20.52" x2="38.61" y2="13.35" />
                <line x1="38.23" y1="50" x2="38.23" y2="44.06" />
                <line x1="43.77" y1="38.52" x2="38.23" y2="44.06" />
                <line x1="43.77" y1="31.9" x2="43.77" y2="38.52" />
              </svg>
              {!currentLanguage ? "Electronics" : "Electrónica"}
            </motion.li>
          </Link>
          <Link href="/Design">
            <motion.li
              style={state ? { color: "#6127C9" } : { color: "#366D6E" }}
              whileHover={{ marginLeft: "10px" }}
            >
              <svg
                id="Capa_1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                height="20"
                width="20"
                fill={state ? "#6127C9" : "#366D6E"}
              >
                <path d="m10.83,50v-11.09h-5.45v-4.86h39.24v4.84h-5.45v11.1h-4.89v-4.22H15.72v4.22h-4.89Zm4.9-7.22h18.52v-3.83H15.73v3.83Z" />
                <path d="m41.68,31.07H8.31V12.71h33.36v18.35Z" />
                <path d="m22.08,4.87V0h5.83v4.85h5.38v4.87h-16.58v-4.85h5.37Z" />
              </svg>
              {!currentLanguage ? "Design" : "Diseño"}
            </motion.li>
          </Link>
          <div></div>
          <motion.li
            style={state ? { color: "#6127C9" } : { color: "#366D6E" }}
            whileHover={{ marginLeft: "10px" }}
            onClick={() => dispatch(changeLanguage())}
          >
            <svg
              id="Capa_1"
              data-name="Capa 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              height="20"
              width="20"
              fill={state ? "#6127C9" : "#366D6E"}
            >
              <path d="m0,10.13c.4-1.17,1.23-1.58,2.44-1.58,15.08.02,30.15.01,45.23,0,.62,0,1.2.08,1.69.5.67.59.84,1.49.41,2.41-.52,1.12-1.06,2.23-1.59,3.35-1.72,3.63-3.44,7.26-5.17,10.88-.16.32-.16.58,0,.9,2.24,4.68,4.46,9.37,6.68,14.05.55,1.15.36,2.19-.58,2.74-.36.21-.83.31-1.25.32-1.46.04-2.93.01-4.4.01-13.68,0-27.35,0-41.03.01C1.23,43.75.4,43.34,0,42.18V10.13Zm3.93,29.67h41.02c-.1-.22-.18-.39-.26-.57-1.88-3.96-3.75-7.94-5.65-11.89-.39-.82-.4-1.55,0-2.37,1.91-3.97,3.79-7.95,5.68-11.93.08-.17.16-.34.24-.54H3.93v27.3Z" />
              <g>
                <path d="m19.36,20.61h-7.35v3.96h6.77c.5,0,.87.11,1.12.34.25.22.37.52.37.88s-.12.66-.36.9c-.24.23-.62.35-1.12.35h-6.77v4.58h7.61c.51,0,.9.12,1.16.36.26.24.39.55.39.95s-.13.69-.39.93c-.26.24-.65.36-1.16.36h-8.87c-.71,0-1.22-.16-1.53-.47-.31-.31-.47-.82-.47-1.53v-12.11c0-.47.07-.85.21-1.15.14-.3.36-.51.65-.65.3-.14.68-.2,1.14-.2h8.62c.52,0,.91.12,1.16.35.25.23.38.53.38.91s-.13.69-.38.92c-.25.23-.64.35-1.16.35Z" />
                <path d="m36,29.37c0,.97-.25,1.85-.75,2.63-.5.78-1.24,1.38-2.2,1.82s-2.11.66-3.44.66c-1.59,0-2.9-.3-3.93-.9-.73-.43-1.33-1.01-1.79-1.73-.46-.72-.69-1.42-.69-2.1,0-.4.14-.73.41-1.02.27-.28.62-.42,1.05-.42.34,0,.64.11.87.33.24.22.44.55.61.98.2.51.43.94.66,1.29.24.34.57.63,1.01.85.43.22,1,.34,1.7.34.97,0,1.75-.23,2.36-.68.6-.45.91-1.01.91-1.69,0-.53-.16-.97-.49-1.3-.33-.33-.75-.59-1.26-.76-.52-.18-1.21-.36-2.07-.56-1.16-.27-2.13-.59-2.91-.95-.78-.36-1.4-.86-1.86-1.48-.46-.63-.69-1.4-.69-2.34s.24-1.67.73-2.36c.48-.69,1.18-1.22,2.1-1.59.92-.37,1.99-.55,3.23-.55.99,0,1.84.12,2.57.37.72.25,1.32.57,1.8.98.48.41.82.83,1.04,1.28.22.45.33.88.33,1.31,0,.39-.14.74-.41,1.05-.27.31-.62.47-1.03.47-.37,0-.66-.09-.85-.28-.19-.19-.4-.49-.63-.92-.29-.61-.64-1.08-1.06-1.42-.41-.34-1.07-.51-1.98-.51-.84,0-1.52.19-2.04.56-.52.37-.77.82-.77,1.34,0,.32.09.6.26.84.18.23.42.44.73.6.31.17.62.3.93.4.31.1.84.23,1.56.42.91.21,1.73.45,2.47.7.74.26,1.36.57,1.88.93.52.37.92.83,1.21,1.39.29.56.43,1.25.43,2.06Z" />
              </g>
            </svg>
            {currentLanguage ? "English" : "Español"}
          </motion.li>
        </ul>
      </motion.nav>
    </>
  );
};
