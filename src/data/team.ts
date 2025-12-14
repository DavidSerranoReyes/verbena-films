/**
 * 👥 TEAM DATA
 * Información del equipo - Ready para Strapi
 */

export interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
  social?: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
}

export const teamMembers: TeamMemberData[] = [
  {
    id: 'ana-puentes',
    name: 'Ana Puentes',
    role: 'CEO de Verbena Films',
    description:
      'Ana Puentes, CEO de Verbena Films presta también el servicio de script doctor y ha trabajado con empresas como Tandem Films, Garde, La Incubadora, Abycine, Another Way Film Festival, Africanauan...',
    social: {
      email: 'ana@verbenafilms.com',
    },
  },
];

/**
 * Obtener todos los miembros del equipo
 * @returns Array de miembros del equipo
 */
export function getAllTeamMembers(): TeamMemberData[] {
  return teamMembers;
}

/**
 * Obtener miembro del equipo por ID
 * @param id ID del miembro
 * @returns Miembro o undefined
 */
export function getTeamMemberById(id: string): TeamMemberData | undefined {
  return teamMembers.find((member) => member.id === id);
}
