import Link from 'next/link'
import { signOut } from 'next-auth/client'

import { CreditCard } from '@styled-icons/material-outlined'
import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted
} from 'styled-icons/material'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders'
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="My profile">
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.Link>
    </Link>

    <Link href="/profile/cards" passHref>
      <S.Link isActive={activeLink === '/profile/cards'} title="My cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </S.Link>
    </Link>

    <Link href="/profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </S.Link>
    </Link>

    <S.Link
      role="button"
      onClick={(e) => {
        e.preventDefault()
        signOut()
      }}
    >
      <ExitToApp size={24} />
      <span>Sign out</span>
    </S.Link>
  </S.Nav>
)

export default ProfileMenu
