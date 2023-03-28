import React, { forwardRef } from 'react';
//import clsx from 'clsx';


import styles from './Heading.module.css';

type HeadingProps = {
  as: string
  children: React.ReactElement
  className?: string
}

const Heading:React.FunctionComponent<HeadingProps> = (props) => {
  const {
    as: Element,
    //weight,
    children,
    className,
    //align,
  } = props;

/*   const headingClass = clsx(
    className,
  ); */


  return (
    <h1 className={styles.main}>
      {children}
    </h1>

  );
};

export default Heading
