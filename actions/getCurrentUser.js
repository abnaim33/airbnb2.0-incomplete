import { getServerSession } from 'next-auth'
import Users from '../models/userModel'

import authOptions from '../pages/api/auth/[...nextauth]'
export async function getSession() {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
    try {
        const session = await getSession()

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await Users.findOne({ email: session.user.email })

        if (!currentUser) {
            return null
        }
        return currentUser
    } catch (error) {
        return null
    }
}