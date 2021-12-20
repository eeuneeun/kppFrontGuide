/* React */
import React from 'react';

/* Components UI */
import DefaultButton from '../atoms/Button';

/* Material UI */
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export function MuiModal(props) {
  // @ isOpen : boolean
  //   - 현 모달 객체 여닫기 제어 용도
  const isOpen = props.isOpen;
  const setIsOpen = props.setIsOpen;

  // @ maxWidth : string
  //   - 모달창 사이즈 옵션
  //   - xs, sm, md, lg, xl
  const maxWidth = props.maxWidth;

  // @ modalTitle : string
  //   - 모달창 제목
  const modalTitle = props.modalTitle;

  // @ modalCont : string || object
  //   - 모달에 들어갈 내용
  const modalCont = props.modalCont;

  // @ modalFooter : string || object
  //   - 모달창 하단부에 들어갈 내용
  const modalFooter = props.modalFooter;

  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth={maxWidth}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby={modalTitle ? 'modal-title' : ''}
        {...props}
      >
        {modalTitle ? (
          <DialogTitle id='modal-title'>{modalTitle}</DialogTitle>
        ) : (
          ''
        )}

        <DialogContent>{modalCont}</DialogContent>

        <DialogActions>
          {modalFooter ? (
            modalFooter
          ) : (
            <DefaultButton btnText='닫기' onClick={() => setIsOpen(false)} />
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
