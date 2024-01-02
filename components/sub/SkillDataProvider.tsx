'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import { useInView } from 'react-intersection-observer'

interface IProps {
  src: string
  width: number
  height: number
  index: number
}

const SkillDataProvider: FC<IProps> = ({ src, width, height, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const animationDelay = 0.3
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}>
      <Image src={src} width={width} height={height} alt='skill image' />
    </motion.div>
  )
}

export default SkillDataProvider
