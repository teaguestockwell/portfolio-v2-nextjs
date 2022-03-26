import React from 'react'

export const TypeWriterText = ({
  lines,
  prefix = '',
  eolTicks = 32,
  tickFreq = 50,
  eolFlashingChar: caret = '_',
  style,
}: {
  lines: string[]
  prefix?: string
  eolTicks?: number
  tickFreq?: number
  eolFlashingChar?: string
  style?: React.CSSProperties
}) => {
  const ref = React.useRef({lineI: 0, charI: 0, eolTicks: 0}).current
  const [tick, setTick] = React.useState(0)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTick((t) => t + 1)
    }, tickFreq)

    return () => clearTimeout(timer)
  }, [tick, setTick, tickFreq])

  const getText = () => {
    // add char
    if (ref.charI <= lines[ref.lineI].length) {
      // await eol ticks
      if (ref.charI === lines[ref.lineI].length - 1) {
        if (ref.eolTicks !== eolTicks) {
          ref.eolTicks++
          return lines[ref.lineI]
        } else {
          ref.eolTicks = 0
        }
      }

      ref.charI++
      return lines[ref.lineI].substring(0, ref.charI)
    }

    // remove char
    if (ref.charI <= lines[ref.lineI].length * 2) {
      ref.charI++
      return lines[ref.lineI].substring(
        0,
        lines[ref.lineI].length + lines[ref.lineI].length - ref.charI
      )
    }

    // nextLine
    ref.charI = 0
    ref.lineI = ref.lineI >= lines.length - 1 ? 0 : ref.lineI + 1
    return ''
  }

  return (
    <span style={style}>
      {prefix}
      <br />
      <br />
      {getText()}
      {Math.floor(tick / 8) % 2 ? caret : ' '}
    </span>
  )
}
