'use client'

import { motion } from 'framer-motion'
import { Code, Layout, Zap, Rocket } from 'lucide-react'

const processes = [
  { icon: Layout, title: 'Design', description: 'Create intuitive and appealing user interfaces' },
  { icon: Code, title: 'Develop', description: 'Write clean, efficient, and maintainable code' },
  { icon: Zap, title: 'Test', description: 'Ensure high-quality and bug-free applications' },
  { icon: Rocket, title: 'Deploy', description: 'Launch and maintain scalable solutions' },
]

const WorkProcess = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">My Work Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: 'spring' }}
            >
              <motion.div
                className="text-4xl mb-4 text-blue-600 dark:text-blue-400 inline-block"
                whileHover={{ scale: 1.2, rotate: 360, color: '#00BFFF' }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <process.icon size={48} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkProcess

