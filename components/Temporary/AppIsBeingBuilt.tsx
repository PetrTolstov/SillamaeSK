import MainRect from "./MainRect";
import { useState } from "react";
import styles from './mainrect.module.css'

function AppIsBeingBuilt({isEst}: {isEst: boolean}) {

  return (
    <>
      <main className={styles.main}>

        <MainRect isEst={isEst} ></MainRect>

      </main>
    </>
  );
}

export default AppIsBeingBuilt;
