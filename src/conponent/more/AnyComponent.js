import { useSpring, animated } from '@react-spring/web'

export default function AnyComponent() {
  const [springs, api] = useSpring(()=>({
    from: { x: 0 },
  }))

  const handleHover = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    })
  }

  return (
    <animated.div
      onMouseUp={handleHover}
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
      }}
    />
  )
}