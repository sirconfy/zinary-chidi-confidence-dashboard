import {

  IconChecklist,
  IconLayoutDashboard,
  IconSettings,
  IconAlertCircleOff,
  IconUserShield,
  IconUsers,
  IconWallet,
  IconCashRegister,
  IconCashBanknote
 

} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
   href: string
  // icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '',
    icon: <IconLayoutDashboard size={18} />,
    sub: [
      {
        title: 'Short Loan',
        label: '',   
        href: '',
      
      },
      {
        title: 'Installment Loan',
        label: '',
        href: '',
            
      },
     
    ],
  },
  {
    title: 'Loan',
    label: '',
    href: '',
    icon: < IconCashBanknote size={18} />,
  },
  {
    title: 'Transactions',
    label: '',
    href: '',
     icon: < IconCashRegister size={18} />,
  },
  {
    title: 'Users',
    label: '',
    href: '',
    icon: <IconUserShield size={18} />,
  },
  {
    title: 'Payments',
    label: '',
    href: '',
    icon: < IconAlertCircleOff size={18} />,
   
  },
  {
    title: 'Wallet',
    label: '',
    href: '/',
   icon: <IconWallet size={18} />,
  },
  {
    title: 'Staff',
    label: '',
    href: '',
    icon: <IconUsers size={18} />,
  },

  {
    title: 'Audit Trail',
    label: '',
    href: '',
    icon:  <IconChecklist size={18} />
  },
  
  {
    title: 'Settings',
    label: '',
    href: '',
    icon: <IconSettings size={18} />,
  },
]
