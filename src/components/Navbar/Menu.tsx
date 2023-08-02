import styles from "@/styles/components/Navbar/Menu.module.css";

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </nav>
  );
};
