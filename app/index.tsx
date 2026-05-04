import { format } from 'date-fns';
import { Text, View } from 'react-native';

export default function Index() {
  const updatedAt = format(new Date('2026-05-03T12:00:00.000Z'), 'PPP');

  return (
    <View className="flex-1 items-center justify-center bg-slate-950 px-6">
      <View className="w-full max-w-sm rounded-3xl border border-emerald-400/30 bg-slate-900 p-6">
        <Text className="text-2xl font-semibold text-white">PadelMatch</Text>
        <Text className="mt-3 text-base leading-6 text-slate-300">
          UI foundations are ready for upcoming component and skeleton work.
        </Text>
        <Text className="mt-6 text-sm text-emerald-300">Updated {updatedAt}</Text>
      </View>
    </View>
  );
}
