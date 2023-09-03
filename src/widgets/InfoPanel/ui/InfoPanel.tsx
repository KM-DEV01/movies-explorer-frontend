import React from 'react';
import css from './InfoPanel.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store';
import { IInfoPanel, initialInfoPanelState, setInfo } from '@widgets/InfoPanel';

export function InfoPanel(props: IInfoPanel) {
  const [isDisplayed, setIsDisplayed] = React.useState(false);
  let timeout: ReturnType<typeof setTimeout>;

  const dispatch = useDispatch();
  const info = useSelector((state: RootState) => state.info);

  const displayMessage = () => {
    clearTimeout(timeout);
    dispatch(setInfo(props));
    timeout = setTimeout(() => {
      dispatch(setInfo(initialInfoPanelState));
    }, 5000);
    clearTimeout(timeout);
  };

  React.useEffect(() => {
    displayMessage();
    if (info.information) return setIsDisplayed(true);
    return setIsDisplayed(false);
  }, [info]);

  return (
    <div className={classNames(css.infoPanel, { [css.infoPanel_hidden]: !isDisplayed })}>
      <p className='infoPanel__text'>{info.information}</p>
      <span
        className={classNames(css.infoPanel__icon, { [css.infoPanel__icon_error]: info.isError })}
      >
        i
      </span>
    </div>
  );
}

//Не доделано
