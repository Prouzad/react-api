import React from 'react';
import style from './Modal.module.css';
import { IApiData } from 'Interface';

const Modal = ({
  data,
  showModal,
  callback,
}: {
  data: IApiData;
  showModal: boolean;
  callback: () => void;
}) => {
  return (
    <div
      className={style.modalBox}
      style={{ display: showModal ? 'none' : 'flex' }}
      onClick={callback}
    >
      <div className={style.modalContainer}>
        <div className={style.buttonX}>X</div>
        <div className={style.imageBox}>
          <img src={data.image} alt={data.title} />
        </div>
        <div className={style.title}>
          <h3>{data.title}</h3>
          <div className={style.genres}>
            {data.genres?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>

        <div className={style.synopsis}>{data.synopsis}</div>
        <a href={data.link} target="_blank" rel="noreferrer">
          <div className={style.button}>follow the link</div>
        </a>
      </div>
    </div>
  );
};

export default Modal;
