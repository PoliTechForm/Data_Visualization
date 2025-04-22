import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bgImage from './img/bg.jpg'
import {
  PieChart, Pie, Cell, Tooltip,
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid
} from 'recharts'
import { motion } from 'framer-motion'

export default function DinoCharts() {
  // Definimos los estados para cada cosa
  const [alimentacionData, setAlimentacionData] = useState([])
  const [longitudData, setLongitudData] = useState([])
  const [paisesData, setPaisesData] = useState([])

  // Definimos una lista de colores para las graficas
  const COLORS = [
    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
    '#FF9F40', '#00C49F', '#FFBB28', '#FF8042', '#A28EFF',
    '#7ED6DF', '#E056FD', '#F6E58D', '#EA2027', '#1B9CFC'
  ]

  useEffect(() => {
    const BASE_URL = 'https://data-visualization-xxvc.onrender.com'
  
    // Carga los datos de alimentación
    axios.get(`${BASE_URL}/api/dinosaurios/alimentacion`)
      .then(res => setAlimentacionData(
        res.data.map(item => ({ name: item.Tipo_alimentacion, value: Number(item.cantidad_en_Argentina) }))
      ))
      .catch(err => console.error("Error en alimentación", err))
  
    // Carga los datos de longitud
    axios.get(`${BASE_URL}/api/dinosaurios/longitud`)
      .then(res => setLongitudData(
        res.data.map(item => ({ name: item.Especie_nombre, value: Number(item.Longitud) }))
      ))
      .catch(err => console.error("Error en longitud", err))
  
    // Carga los datos de países
    axios.get(`${BASE_URL}/api/dinosaurios/paises`)
      .then(res => setPaisesData(
        res.data.map(item => ({ name: item.lived_in, value: Number(item.cantidad_de_especies) }))
      ))
      .catch(err => console.error("Error en países", err))
  }, [])
  
  return (
    <>
      {/* el backgound */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <img
          src={bgImage}
          alt="Fondo difuminado"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Superposicion negra sobre el fondo */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black via-black-70 to-transparent z-10" />

        <div className="absolute inset-0 flex items-end justify-center pb-16 z-20">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-6xl text-white font-bold shadow-black text-center drop-shadow-md"
          >
            Dashboard de datos sobre dinosaurios
          </motion.h1>
        </div>
      </div>

      {/* Contenedor principal de los graficos*/}
      <div className="pt-20 pb-16 px-4 space-y-24 bg-amber-50">
        
        {/* Seccion de alimentacion */}
        <section id="alimentacion" className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h2
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Alimentacion de los dinosaurios
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mx-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            distribucion de tipos de alimentacion de dinosaurios encontrados en Argentina
          </motion.p>
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 mx-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {alimentacionData.length ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={alimentacionData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={80}
                    label
                  >
                    {alimentacionData.map((_, idx) => (
                      <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p>Cargando datos de alimentacion...</p>
            )}
          </motion.div>
        </section>

        {/* Seccion de longitud */}
        <section id="longitud" className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h2
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Longitud de dinosaurios
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mx-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Comparacion de longitudes promedio de distintas especies
          </motion.p>
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 mx-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {longitudData.length ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={longitudData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-45} textAnchor="end" height={60} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value">
                    {longitudData.map((_, idx) => (
                      <Cell key={`cell-length-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p>Cargando datos de longitud...</p>
            )}
          </motion.div>
        </section>

        {/* Seccion de paises */}
        <section id="paises" className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h2
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            presencia de especies por pais
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mx-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Top 10 paises donde se hallaron mas especies de dinosaurios
          </motion.p>
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 mx-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {paisesData.length ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={paisesData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-45} textAnchor="end" height={60} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value">
                    {paisesData.map((_, idx) => (
                      <Cell key={`cell-country-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p>Cargando datos de paises...</p>
            )}
          </motion.div>
        </section>
      </div>
    </>
  )
}
