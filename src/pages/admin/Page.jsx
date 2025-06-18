import { Outlet } from 'react-router-dom'
import { TypographyH1 } from '@/components/custom/Typography'
import SettingsNav from '@/components/SettingsNav'

const navigationLinks = [
    { label: "Members", href: "/admin/myteam/members" },
    { label: "Permissions", href: "/admin/myteam/permissions" },
    { label: "Invitations", href: "/admin/myteam/invitations" }
]

export default function Page() {
    return (
        <>
            <TypographyH1>Team</TypographyH1>
            <SettingsNav links={navigationLinks} />
            <Outlet />
        </>
    )
}
