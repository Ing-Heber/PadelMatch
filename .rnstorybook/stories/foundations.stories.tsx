import { format } from 'date-fns';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Text, View } from 'react-native';

type DependencySmokeCardProps = {
  title: string;
  summary: string;
  updatedAt: string;
};

function DependencySmokeCard({ title, summary, updatedAt }: DependencySmokeCardProps) {
  return (
    <View className="flex-1 items-center justify-center bg-slate-950 px-6">
      <View className="w-full max-w-sm rounded-3xl border border-emerald-400/30 bg-slate-900 p-6">
        <Text className="text-2xl font-semibold text-white">{title}</Text>
        <Text className="mt-3 text-base leading-6 text-slate-300">{summary}</Text>
        <Text className="mt-6 text-sm text-emerald-300">Updated {updatedAt}</Text>
      </View>
    </View>
  );
}

const meta = {
  title: 'Foundations/Dependency Smoke',
  component: DependencySmokeCard,
  args: {
    title: 'PadelMatch UI setup',
    summary:
      'NativeWind styling, date-fns formatting, and Storybook wiring are available for upcoming component work.',
    updatedAt: format(new Date('2026-05-03T12:00:00.000Z'), 'PPP'),
  },
} satisfies Meta<typeof DependencySmokeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

