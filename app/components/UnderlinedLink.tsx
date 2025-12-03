import React, { useState } from 'react'
import { motion, MotionValue, useMotionTemplate } from 'framer-motion'

const UnderlinedLink = (props: {
    text: string,
    color: MotionValue<string>
}) => {
const [hovered, setHovered] = useState(false);
    const {text, color} = props;
    const underlineColor = useMotionTemplate`${color}`;
  return (
    <motion.div 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex flex-col cursor-pointer"
        style={{
            color: underlineColor
        }}
        >
        <span>{text}</span>
        <motion.div 
            className="bottom-0 left-0 h-[1px]"
            initial={{ scaleX: 0, originX: 1 }}
            animate={hovered ? { scaleX: 1 } : { scaleX: 0 }}
            style={{ originX: hovered ? 0 : 1, backgroundColor: underlineColor }}
            transition={{
                ease: 'easeOut',
                duration: 0.20
            }}
        />
    </motion.div>
  )
}

export default UnderlinedLink