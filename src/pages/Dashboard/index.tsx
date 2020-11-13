import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/54218793?s=460&u=3a39f3c2b748b1f442426c4231874c4690866b5d&v=4"
            alt="AlexSRH"
          />
          <div>
            <strong>AlexSRH/GoBarber</strong>
            <p>GoBarber - Um app de agendamento de serviços de barbearia.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/54218793?s=460&u=3a39f3c2b748b1f442426c4231874c4690866b5d&v=4"
            alt="AlexSRH"
          />
          <div>
            <strong>AlexSRH/GoBarber</strong>
            <p>GoBarber - Um app de agendamento de serviços de barbearia.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/54218793?s=460&u=3a39f3c2b748b1f442426c4231874c4690866b5d&v=4"
            alt="AlexSRH"
          />
          <div>
            <strong>AlexSRH/GoBarber</strong>
            <p>GoBarber - Um app de agendamento de serviços de barbearia.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
