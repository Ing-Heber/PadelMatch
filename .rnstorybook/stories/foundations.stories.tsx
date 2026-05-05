import { format } from 'date-fns';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, Text, TextInput, View } from 'react-native';

import { useAppStore } from '@/stores/app-store';

type FoundationSmokeFormValues = {
  playerName: string;
};

function StateFormFoundationCard() {
  const playerNameDraft = useAppStore((state) => state.playerNameDraft);
  const setPlayerNameDraft = useAppStore((state) => state.setPlayerNameDraft);
  const clearPlayerNameDraft = useAppStore((state) => state.clearPlayerNameDraft);
  const updatedAt = format(new Date('2026-05-03T12:00:00.000Z'), 'PPP');
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FoundationSmokeFormValues>({
    defaultValues: {
      playerName: playerNameDraft,
    },
  });

  const saveDraft = handleSubmit(({ playerName }) => {
    const trimmedPlayerName = playerName.trim();

    setPlayerNameDraft(trimmedPlayerName);
    reset({ playerName: trimmedPlayerName });
  });

  const clearDraft = () => {
    clearPlayerNameDraft();
    reset({ playerName: '' });
  };

  return (
    <View className="flex-1 items-center justify-center bg-slate-950 px-6 py-10">
      <View className="w-full max-w-sm rounded-3xl border border-emerald-400/30 bg-slate-900 p-6">
        <Text className="text-2xl font-semibold text-white">State + form foundation</Text>
        <Text className="mt-3 text-base leading-6 text-slate-300">
          Storybook smoke example for `zustand` shared state and `react-hook-form` field handling.
        </Text>

        <Text className="mt-6 text-sm font-medium text-slate-200">Player name draft</Text>
        <Controller
          control={control}
          name="playerName"
          rules={{
            validate: (value) => value.trim().length > 0 || 'Enter a player name before saving.',
          }}
          render={({ field: { onBlur, onChange, value } }) => (
            <TextInput
              className="mt-3 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-base text-white"
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Add a starter value"
              placeholderTextColor="#94A3B8"
              value={value}
            />
          )}
        />

        {errors.playerName ? (
          <Text className="mt-2 text-sm text-rose-300">{errors.playerName.message}</Text>
        ) : null}

        <View className="mt-4 flex-row gap-3">
          <Pressable className="flex-1 rounded-2xl bg-emerald-500 px-4 py-3" onPress={saveDraft}>
            <Text className="text-center text-sm font-semibold text-slate-950">Save draft</Text>
          </Pressable>
          <Pressable
            className="flex-1 rounded-2xl border border-slate-700 px-4 py-3"
            onPress={clearDraft}
          >
            <Text className="text-center text-sm font-semibold text-slate-200">Clear</Text>
          </Pressable>
        </View>

        <View className="mt-6 rounded-2xl bg-slate-950/70 p-4">
          <Text className="text-sm font-medium text-slate-200">Store snapshot</Text>
          <Text className="mt-2 text-sm leading-6 text-slate-300">
            Saved draft: {playerNameDraft ? playerNameDraft : 'No draft saved yet.'}
          </Text>
          <Text className="mt-2 text-xs leading-5 text-slate-400">
            Submit success: {isSubmitSuccessful ? 'yes' : 'no'}
          </Text>
        </View>

        <Text className="mt-6 text-sm text-emerald-300">Updated {updatedAt}</Text>
        <Text className="mt-2 text-xs leading-5 text-slate-400">
          Use this as a starter reference for auth and scheduling flows, not as final product logic.
        </Text>
      </View>
    </View>
  );
}

const meta = {
  title: 'Foundations/Dependency Smoke',
  component: StateFormFoundationCard,
} satisfies Meta<typeof StateFormFoundationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

