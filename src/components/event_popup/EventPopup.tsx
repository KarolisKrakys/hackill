import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Popup.css";

function Popup({setOpenModal }:any, props:any) {
    return (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              <h1>{props.name}</h1>
            </div>
            <div className="body">
              <p>{props.name}</p>
            </div>
          </div>
        </div>
      );
    }
export default Popup