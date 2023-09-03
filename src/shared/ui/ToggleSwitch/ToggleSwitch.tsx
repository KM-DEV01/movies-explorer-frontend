import css from './ToggleSwitch.module.css';

interface Props {
  checked: boolean;
  onChecked: () => void;
  text: string;
}

export function ToggleSwitch({ onChecked, checked, text }: Props) {
  return (
    <div className={css.toggleSwitch}>
      <label className={css.toggleSwitch__switch} htmlFor='filter-checkbox'>
        <input
          className={css.toggleSwitch__switchCheckbox}
          type='checkbox'
          id='filter-checkbox'
          onChange={onChecked}
          checked={checked}
        />
        <span className={css.toggleSwitch__switchSlider} />
      </label>
      <p className={css.toggleSwitch__property}>{text}</p>
    </div>
  );
}
