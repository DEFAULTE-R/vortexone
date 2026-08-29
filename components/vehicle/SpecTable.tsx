import { VehicleSpec } from '@/data/vehicleSpecs';

interface SpecTableProps {
  specs: VehicleSpec[];
}

export const SpecTable = ({ specs }: SpecTableProps) => {
  // Group specs by category
  const groupedSpecs = specs.reduce((acc, spec) => {
    if (!acc[spec.category]) {
      acc[spec.category] = [];
    }
    acc[spec.category].push(spec);
    return acc;
  }, {} as Record<string, VehicleSpec[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedSpecs).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold text-vortex-dark mb-4">{category}</h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-vortex-light-grey">
            <table className="w-full">
              <tbody>
                {items.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-vortex-white'}
                  >
                    <td className="px-6 py-3 text-sm font-medium text-vortex-dark border-b border-vortex-light-grey">
                      {item.spec}
                    </td>
                    <td className="px-6 py-3 text-sm text-vortex-grey border-b border-vortex-light-grey">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};
