import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
export default function Example(props) {
  return (
    <dl className={`example ${props.className ? props.className : ''}`}>
      <dt className='flex-start'>
        <span className='flex-start'>
          <AutoFixHighIcon />
          예제
        </span>
        <span>{props.title ? props.title : ''}</span>
      </dt>
      <dd>{props.contents}</dd>
    </dl>
  );
}
