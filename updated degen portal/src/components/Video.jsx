import { background } from '../assets';

const Video = () => {
  return (
    <div className='main-video absolute z-[0] h-[100%] w-[100%]'>
      <video id='main_video' className='video object-cover h-[100%] w-[100%]' muted autoPlay loop>
        <source type='video/mp4' src={background} />
      </video>
    </div>
  )
}

export default Video